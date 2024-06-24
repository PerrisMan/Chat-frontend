package escom.ipn.app1;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<Users, Long>
{  
    Users findByEmail(@Param("email") String email);
}
