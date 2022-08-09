

package com.api.service.models.entities;

import com.api.service.models.entities.base.BaseEntity;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
public class Transfery extends BaseEntity{

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy="uuid2")
    private String id;
    
    private String amount;
    private Date date; 
    private String idTransmitter; 
    private String idReceiver;
    private Boolean condition; 
    private EnumType type; 
    
    @ManyToOne
    private Client client;
}
