import { Component, inject } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { AviatorScene } from './scene.component';
import { GameService } from './services/game.service';
import { WorldService } from './services/world.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NgtCanvas],
	template: `
		<ngt-canvas
			[sceneGraph]="scene"
			[camera]="{ fov: 50, near: 0.1, far: 10000 }"
			[shadows]="true"
		/>
		<span
			style="
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: x-large;
		font-family: 'Exo 2';
		font-weight: bold;
		color: #ffd700;
	"
		>
			Coins: {{ game.coins }}
		</span>
	`,
	providers: [WorldService, GameService],
})
export class AppComponent {
	scene = AviatorScene;
	game = inject(GameService);
}
