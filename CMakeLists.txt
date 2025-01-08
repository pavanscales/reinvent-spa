# CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(WebAssemblyApp)

# Enable WebAssembly target
set(CMAKE_CXX_STANDARD 14)

add_executable(main src/main.cpp src/core/App.cpp src/routes/Home.cpp src/routes/About.cpp src/routes/Contact.cpp)
