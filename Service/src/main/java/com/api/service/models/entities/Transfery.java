package com.api.service.models.entities;

import com.api.service.enumerations.EnumType;
import com.api.service.models.entities.base.BaseEntity;
import java.util.Date;
import javax.persistence.Entity;

import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import lombok.Data;

@Entity
@Data
public class Transfery extends BaseEntity {

    private Double amount;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date date;
    private Boolean condition;
    private EnumType type;

    @OneToOne
    private Client clientSender;      
    @OneToOne
    private Client clientReceiver;
}
