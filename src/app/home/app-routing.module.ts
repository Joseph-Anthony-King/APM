import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterOutlet } from "@angular/router"

import { WelcomeComponent } from "./welcome.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: "welcome", component: WelcomeComponent },
            { path: "", redirectTo: "welcome", pathMatch: "full" },
            { path: "**", redirectTo: "welcome", pathMatch: "full" }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
