package com.api.service.models.entities;


import com.api.service.models.entities.base.BaseEntity;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
public class Client extends BaseEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy="uuid2")
    private String id;
    
    private String name;
    private String lastName;
    private String email;
    private String password;
    
    @OneToOne
    private Wallet wallet;
    @OneToMany
    private List<Transfery> transfery; 
    
}
