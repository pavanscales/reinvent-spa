/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integrati
  Licensed under MIT.
*/
#include <iostream>
#include "core/App.h"
#include "routes/Routes.h"
int main(){
    app_main();
    home_route();
    about_route();
  contact_route();
  return 0;
}