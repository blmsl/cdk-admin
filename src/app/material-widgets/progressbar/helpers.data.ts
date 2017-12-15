export const PROGRESSBAR_HELPERS: any = {

	tsSourceProgressbar: `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public color;
  public mode;
  public value;
  public bufferValue;
  

}

	`.trim(),
	htmlSourceProgressbar: `
<h2 class="example-h2">Progress bar configuration</h2>

<section class="example-section">
	<label class="example-margin">Color:</label>
	<mat-radio-group [(ngModel)]="color">
		<mat-radio-button class="example-margin" value="primary">
		Primary
		</mat-radio-button>
		<mat-radio-button class="example-margin" value="accent">
		Accent
		</mat-radio-button>
		<mat-radio-button class="example-margin" value="warn">
		Warn
		</mat-radio-button>
	</mat-radio-group>
</section>

<section class="example-section">
	<label class="example-margin">Mode:</label>
	<mat-radio-group [(ngModel)]="mode">
		<mat-radio-button class="example-margin" value="determinate">
		Determinate
		</mat-radio-button>
		<mat-radio-button class="example-margin" value="indeterminate">
		Indeterminate
		</mat-radio-button>
		<mat-radio-button class="example-margin" value="buffer">
		Buffer
		</mat-radio-button>
		<mat-radio-button class="example-margin" value="query">
		Query
		</mat-radio-button>
	</mat-radio-group>
</section>

<section class="example-section" *ngIf="mode == 'determinate' || mode == 'buffer'">
	<label class="example-margin">Progress:</label>
	<mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
</section>
<section class="example-section" *ngIf="mode == 'buffer'">
	<label class="example-margin">Buffer:</label>
	<mat-slider class="example-margin" [(ngModel)]="bufferValue"></mat-slider>
</section>

<h2 class="example-h2">Result</h2>

<section class="example-section">
	<mat-progress-bar
	class="example-margin"
	[color]="color"
	[mode]="mode"
	[value]="value"
	[bufferValue]="bufferValue">
	</mat-progress-bar>
</section>
	`.trim(),

}