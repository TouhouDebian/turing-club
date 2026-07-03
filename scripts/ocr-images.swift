import Foundation
import ImageIO
import AppKit
import Vision

let paths = Array(CommandLine.arguments.dropFirst())
var results: [[String: String]] = []

for path in paths {
	let url = URL(fileURLWithPath: path)
	let appKitImage: CGImage? = {
		guard let nsImage = NSImage(contentsOf: url) else { return nil }
		var rect = NSRect(origin: .zero, size: nsImage.size)
		return nsImage.cgImage(forProposedRect: &rect, context: nil, hints: nil)
	}()
	let imageSourceImage: CGImage? = {
		guard let source = CGImageSourceCreateWithURL(url as CFURL, nil) else {
			return nil
		}
		return CGImageSourceCreateImageAtIndex(source, 0, nil)
	}()
	guard let image = appKitImage ?? imageSourceImage else {
		results.append(["path": path, "text": ""])
		continue
	}

	func recognize(_ level: VNRequestTextRecognitionLevel) throws -> [String] {
		let request = VNRecognizeTextRequest()
		request.recognitionLevel = level
		request.usesLanguageCorrection = false
		request.minimumTextHeight = 0.006
		request.recognitionLanguages = ["zh-Hans", "en-US"]

		let handler = VNImageRequestHandler(cgImage: image, options: [:])
		try handler.perform([request])
		return request.results?
			.compactMap { $0.topCandidates(1).first?.string.trimmingCharacters(in: .whitespacesAndNewlines) }
			.filter { !$0.isEmpty } ?? []
	}

	do {
		let accurateLines = try recognize(.accurate)
		let lines = accurateLines.isEmpty ? try recognize(.fast) : accurateLines
		results.append(["path": path, "text": lines.joined(separator: "\n")])
	} catch {
		results.append(["path": path, "text": ""])
	}
}

let data = try JSONSerialization.data(withJSONObject: results, options: [])
print(String(data: data, encoding: .utf8) ?? "[]")
