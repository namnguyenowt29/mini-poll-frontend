import { BehaviorSubject } from 'rxjs';

export class LoadingService {
  private readonly _loading = new BehaviorSubject(false);
  public readonly loading = this._loading.asObservable();

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }
}
