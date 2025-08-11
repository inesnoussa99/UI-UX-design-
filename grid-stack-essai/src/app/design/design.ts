import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridStack, GridStackOptions, GridStackWidget } from 'gridstack';
import { ChangerProprietes } from '../changer-proprietes/changer-proprietes';
import { UIelement } from '../uielement';
import { GridstackComponent, NgGridStackOptions, NgGridStackWidget, elementCB, gsCreateNgComponents, nodesCB, GridstackModule} from 'gridstack/dist/angular';
import { ButtonComponent , TextAreaComponent , InputComponent, SelectComponent , ImageComponent ,TableComponent } from '../dummy.component/dummy.component';
let ids = 1;

@Component({
  standalone: true,
  selector: 'app-design',
  imports: [CommonModule, GridstackModule,ChangerProprietes,ButtonComponent , TextAreaComponent , InputComponent, SelectComponent , ImageComponent ,TableComponent],
  templateUrl: './design.html',
  styleUrl: './design.css'
})
export class Design implements OnInit {

  @ViewChild(GridstackComponent) gridComp?: GridstackComponent;
  @ViewChild('origTextArea', {static: true}) origTextEl?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('textArea', {static: true}) textEl?: ElementRef<HTMLTextAreaElement>;
  public selectedElement: UIelement | null = null;
  public elementsMap = new Map<string, UIelement>(); 

  public show = 7;
  public twoGridOpt1: NgGridStackOptions = {
    column: 6,
    cellHeight: 100, 
    margin: 10,
    minRow: 1,
    removable: '.trash',
    acceptWidgets: true,
    float: true,
    resizable: {
      handles: 'all' 
    },
    draggable: {
      handle: '.grid-stack-item-content'  
    },
    
};
  public sidebarContent7: NgGridStackWidget[] = [
      { selector: 'app-button', id: 'button' },
      { selector: 'app-text-area', id: 'textarea' },
      { selector: 'app-input' , id: 'input'},
      { selector: 'app-select', id: 'select' },
      { selector: 'app-image', id: 'image' },
      { selector: 'app-table',id: 'table' }
];

  ngOnInit(): void {
    this.onShow(this.show);}

  public onShow(val: number) {
              this.show = val;
              GridStack.addRemoveCB = gsCreateNgComponents;
              setTimeout(() => {
                const data = this.twoGridOpt1;
                GridStack.setupDragIn('.sidebar-item', undefined, this.sidebarContent7);
                if (this.origTextEl) this.origTextEl.nativeElement.value = JSON.stringify(data, null, '  ');
              });
              if (this.textEl) this.textEl.nativeElement.value = '';
      }

  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  public onResizeStop(data: elementCB) {
    console.log('resizestop ', data.el.gridstackNode);
  }

©
  public add() {
    this.gridComp?.grid?.addWidget({x:3, y:0, w:2, content:`item ${ids}`, id:String(ids++)});
  }
  public delete() {
    let grid = this.gridComp?.grid;
    if (!grid) return;
    let node = grid.engine.nodes[0];
    if (node?.subGrid && node.subGrid.engine.nodes.length) {
      grid = node.subGrid;
      node = grid.engine.nodes[0];
    }
    if (node) grid.removeWidget(node.el!);
  }
  public modify() {
    this.gridComp?.grid?.update(this.gridComp?.grid.engine.nodes[0]?.el!, {w:3})
  }
  public newLayout() {
    this.gridComp?.grid?.load([
      {x:0, y:1, id:'1', minW:1, w:1}, 
      {x:1, y:1, id:'2'},
      {x:3, y:0, w:2, content:'new item'} ])
  }
  public load(layout: GridStackWidget[]) {
    this.gridComp?.grid?.load(layout);
  }
  
  
  onWidgetClick(node: GridStackWidget) {
    if (node.id && this.elementsMap.has(node.id)) {
      this.selectedElement = this.elementsMap.get(node.id)!;
    }
  }
  private findGridItemById(id: string): HTMLElement | null {
    const allItems = document.querySelectorAll('.grid-stack-item');
    for (const item of Array.from(allItems)) {
      const node = (item as any)['gridstackNode'];
      if (node?.id === id) {
        return item as HTMLElement;
      }
    }
    return null;
  }

  public onWidgetChange(updated: UIelement) {
    const widget = this.findGridItemById(updated.id);
    if (!widget) return;

    const contentEl = widget.querySelector('.grid-stack-item-content') as HTMLElement;
    if (!contentEl) return;

    // Exemple : bouton
    if (updated.type === 'button') {
      contentEl.innerText = updated.properties['label'] || '...';
      contentEl.style.backgroundColor = updated.properties['color'] || '';
      contentEl.style.width = updated.properties['width'] + 'px';
      contentEl.style.height = updated.properties['height'] + 'px';

    }
 }





}
