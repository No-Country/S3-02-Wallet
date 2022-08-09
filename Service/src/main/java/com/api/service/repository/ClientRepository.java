
package com.api.service.repository;

import com.api.service.models.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {
    
    @Query("SELECT c FROM Client c WHERE c.id=:id")
    public Client findById(@Param("id") String id); 
}
