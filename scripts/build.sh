#!/bin/bash
# Build the project using Emscripten and CMake
emcc src/main.cpp src/core/App.cpp src/routes/*.cpp -o build/main.js -s WASM=1
