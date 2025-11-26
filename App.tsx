import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Editor } from './components/Editor';
import { About } from './components/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Editor />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
