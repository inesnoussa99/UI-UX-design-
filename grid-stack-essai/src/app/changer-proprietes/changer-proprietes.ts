import { Component , Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIelement } from '../uielement';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'changer-proprietes',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './changer-proprietes.html',
  styleUrls: ['./changer-proprietes.css']
})
export class ChangerProprietes {
  
@Input() element: UIelement | null = null;
objectKeys = Object.keys;

updateOptions(value: string) {
  if (this.element && this.element.type === 'select') 
  {
    this.element.properties['options'] = value.split(',').map(opt => opt.trim());
  }
}
updatePropertyFromEvent(key: string, event: Event) {
  const input = event.target as HTMLInputElement;
  if (this.element) {
    this.element.properties[key] = input.value;
  }
}

}