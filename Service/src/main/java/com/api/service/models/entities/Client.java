

package com.api.service.models.entities;

import com.api.service.models.entities.base.BaseEntity;
import com.api.service.security.jwt.Role;
import lombok.*;
import org.hibernate.annotations.SQLDelete;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Builder
@SQLDelete(sql = "UPDATE client SET soft_delete = true WHERE id = ?")
@AllArgsConstructor
public class Client extends BaseEntity{

   @Column(nullable = false, unique = true)
   private String email;
   @Column(nullable = false)
   private String password;
   private String name;
   private String lastName;
   private Role role;

   public Client() {  }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getLastName() {
      return lastName;
   }

   public void setLastName(String lastName) {
      this.lastName = lastName;
   }

   public Role getRole() {
      return role;
   }

   public void setRole(Role role) {
      this.role = role;
   }
}
