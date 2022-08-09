
package com.api.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.api.service.models.entities.Transfery;

@Repository
public interface TransferyRepository extends JpaRepository<Transfery, String> {
    
}
