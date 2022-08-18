package com.api.service.models.request;

import com.api.service.enumerations.EnumType;
import com.api.service.models.entities.Client;
import com.sun.istack.NotNull;
import java.util.Date;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import lombok.Data;

@Data
public class TransferyRequest {

    @NotNull
    private Double amount;

    @Temporal(javax.persistence.TemporalType.DATE)
    private Date date;
    private Boolean condition;
    private EnumType type;

    @NotNull
    @OneToOne
    private Client clientSender;
    @NotNull
    @OneToOne
    private Client clientReceiver;
}
