import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-drawer-panel',
  templateUrl: './drawer-panel.component.html',
  styleUrls: ['./drawer-panel.component.scss']
})
export class DrawerPanelComponent {
  @Input() drawer: boolean = false;
  @Output() drawerChange  = new EventEmitter<boolean>();

  closeDrawer() {
    this.drawerChange.emit(!this.drawer);
  }
}
