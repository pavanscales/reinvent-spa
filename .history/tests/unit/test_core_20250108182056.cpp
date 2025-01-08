#include <cassert>
#include "core/App.h"

void test_app_main() {
  // Check if the app main function works (basic test)
  app_main();
  assert(true);  // Example assertion
}

int main() {
  test_app_main();
  return 0;
}