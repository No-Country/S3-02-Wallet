package com.api.service.service.impl;

import com.api.service.models.request.TransferyRequest;
import com.api.service.repository.TransferyRepository;
import com.api.service.service.TransferyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TransferyServiceImpl implements TransferyService {

    private final TransferyRepository repository;

    @Override
    public void transfer(TransferyRequest request) {

    }

}
