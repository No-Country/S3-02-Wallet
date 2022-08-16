package com.api.service.repository;

import com.api.service.models.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {

   boolean existsByEmail(String email);

   Client findByEmail(String email);
}
