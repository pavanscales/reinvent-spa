#include <cassert>
#include "core/App.h"

void test_app_main() {
  app_main();
  assert(true);  
}

int main() {
  test_app_main();
  return 0;
}