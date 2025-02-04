import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
//atributos
user = {
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan.perez@example.com",
  username: "juanp",
  imageUrl: "/chico.jpg",
  Hobby: "Pelear por redes sociales",
  };
  //metodos
// Cambio de Imagen
onImageChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
  const reader = new FileReader();
  reader.onload = ( ) => {
  this.user.imageUrl = reader.result as string;
  };
  reader.readAsDataURL(file);
  }//fin del if
  }//fin del metodo

}
