import React from 'react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white border-2 border-gray-500 rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-widest">TEK DETEK</h1>
            <Link 
              to="/" 
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 font-semibold transition-colors"
            >
              ← BACK TO EDITOR
            </Link>
          </div>

          <div className="space-y-6 text-sm">
            <section>
              <h2 className="text-xl font-bold mb-3 tracking-wide">ABOUT</h2>
              <p className="leading-relaxed">
                TekDetek is a real-time video processing tool that transforms webcam or video files into 
                generative ASCII art with AI-powered detection capabilities. Version 0.5 is a demo release 
                showcasing the core features of this creative video processing pipeline.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 tracking-wide">FEATURES</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Real-time ASCII Art Generation</strong> - Convert video feeds to ASCII characters with multiple style presets</li>
                <li><strong>AI Detection</strong> - Object detection, pose estimation, and luma-based detection</li>
                <li><strong>Customizable Styles</strong> - Multiple ASCII styles and color palettes</li>
                <li><strong>Video Export</strong> - Record MP4 videos and PNG sequences</li>
                <li><strong>Node-Based Pipeline</strong> - Visual node graph interface for building processing chains</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 tracking-wide">TECHNOLOGY</h2>
              <p className="leading-relaxed">
                Built with React, TypeScript, Vite, and p5.js. Uses TensorFlow.js for AI detection models 
                (COCO-SSD for object detection, PoseNet for pose estimation). Deployed with GitHub Pages 
                using HashRouter for seamless routing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 tracking-wide">LICENSE</h2>
              <p className="leading-relaxed">
                This project is licensed under the MIT License. See the LICENSE file for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 tracking-wide">AUTHOR</h2>
              <p className="leading-relaxed">
                <strong>Viktors Mileika</strong><br />
                Copyright (c) 2024 Viktors Mileika
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://buymeacoffee.com/vikmil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-bold rounded transition-colors border border-amber-300"
                >
                  BUY ME A COFFEE
                </a>
                <a
                  href="https://instagram.com/iamviktor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded transition-colors border border-gray-300"
                >
                  INSTAGRAM
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
