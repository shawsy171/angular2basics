import { Component } from '@angular/core';

@Component({
    selector: `my-story`,
    template: `
        <h1>{{story.name}}</h1>
        <h3>First and foremost {{title}}</h3>
        <h3 [innerText] = 'title1'></h3>
        <h3 [style.color] = 'color' >First and foremost {{title}}</h3>
        <structual-directive></structual-directive>
    `
})

export class StoryComponent {
    title: string = 'Damien is a great uncle';
    title1: string = 'innerText';
    title2: string = 'Damien is a great uncle';
    title3: string = 'Damien is a great uncle';
    story = { id: 100, name: 'The Force Awakens' };
    color: string = 'blue';
}
