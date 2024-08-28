import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Input() public placeholder: string = '';
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  emitValue(): void {
    this.onValue.emit(this.searchInput.nativeElement.value);
  }
}
