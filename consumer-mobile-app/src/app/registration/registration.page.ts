import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";

@Component({
  selector: "app-registration",
  templateUrl: "registration.page.html",
  styleUrls: ["registration.page.scss"]
})
export class RegistrationPage {
  public user = new User();
  public email: string;
  public password: string;
  public users: any;
  // public cellPhone: string;
  public lastName: string;
  public firstName: string;
  public addressID: string;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user = userService.user;
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Email already taken.",
      buttons: ["OK"]
    });
    await alert.present();
  }

  async presentAlertCredentials(err) {
    const alert = await this.alertCtrl.create({
      header: "Please fill in form.",
      buttons: ["OK"]
    });
    await alert.present();
  }

  register() {
    const authUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      // cellPhone: this.cellPhone,
      email: this.email,
      password: this.password,
      addressID: 20
    };
    this.authService
      .register(authUser)
      .then(res => {
        const testId = localStorage.getItem("userId");
        console.log(testId);

        this.navCtrl.navigateForward("properties"); // first page after login
      })
      .catch(err => {
        debugger;
        if (
          (authUser.email ||
            authUser.firstName ||
            authUser.lastName ||
            //authUser.cellPhone ||
            authUser.password) == null
        ) {
          this.presentAlertCredentials(err.statusText);
        } else {
          this.presentAlert(err.error.text);
        }
      });
  }

  navToSaved() {
    this.navCtrl.navigateForward("saved");
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
  navToListings() {
    this.navCtrl.navigateForward("listings");
  }
  navToRegistration() {
    this.navCtrl.navigateForward("registration");
  }
}
