package yc.mhkif.marjaneapi.Services.Interfaces;

import yc.mhkif.marjaneapi.Entities.Promotion;
import yc.mhkif.marjaneapi.Entities.ProxyAdmin;

import java.util.List;
import java.util.Optional;

public interface IPromotionService<Entity, DTO> {
    Optional<Entity> findById(Long id);

    List<Entity> findAll();

    Optional<Entity> save(DTO promotion);
    Optional<Entity> update(DTO promotion);

    void delete(Long id);
    List<Promotion> findByProxyAdmin(ProxyAdmin proxyAdmin);
}