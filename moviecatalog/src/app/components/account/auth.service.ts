import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  public autorized = false;

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
        },
        (err) => reject(err),
      );
    });
  }

  register(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
        },
        (err) => reject(err),
      );
    });
  }

  logout(): void {
    this.afAuth.signOut();
  }

  getAuth(): Observable<any> {
    return this.afAuth.authState.pipe(map((auth) => auth));
  }

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      user ? (this.autorized = true) : (this.autorized = false);
    });
  }
}
