

package com.api.service.models.entities;

import com.api.service.models.entities.base.BaseEntity;
import com.api.service.models.enums.TypeCardEnum;
import java.util.List;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@SQLDelete(sql = "UPDATE wallet SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
@Setter @Getter
@NoArgsConstructor
@AllArgsConstructor
public class Wallet extends BaseEntity{

    private Double totalAmount;
    
    private Client client;
    
    private TypeCardEnum typeCardEnum;
    
    private List<Transfery> transferys; 
}
