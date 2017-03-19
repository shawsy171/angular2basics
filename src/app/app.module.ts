import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';
import { StoryComponent } from './story.component';
import { StructualDirectivesModule } from './angularTesting/structualDirectives.module';

@NgModule({
  imports:      [ BrowserModule, StructualDirectivesModule ],
  declarations: [ StoryComponent ],
  bootstrap:    [ StoryComponent ]
})
export class AppModule { }
