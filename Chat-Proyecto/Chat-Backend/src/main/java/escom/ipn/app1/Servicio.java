package escom.ipn.app1;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.hibernate.mapping.List ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(value = "/chat")
public class Servicio 
{
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private MessegeRepository messegeRepository;
    

    @PostMapping(value = "/datos")
    public String datosLogin(@RequestBody Users userLoginRequest) 
    {
        String email = userLoginRequest.getEmail();
        String password = userLoginRequest.getPassword();

        Users usuario = usersRepository.findByEmail(email);
        
        System.out.println("Email: " + email); 
        System.out.println("Password: " + password);

        System.out.println("METODO DATOS LOGIN");    	
    	if(usuario != null)
            if(password.compareTo(usuario.getPassword())==0){
                System.out.println("VALIDO");    		
                return "yes";
    	    }
        System.out.println("NO VALIDO");    	
        return "no";        
    }

    @GetMapping("/message")
    public List<Messege> getAllMessege(){
        return messegeRepository.findAll();
    }

    @PostMapping("/send")
    public String envioMensaje(@RequestBody Messege messageSend) {
        messegeRepository.save(messageSend);
        return "yes";
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteMessage(@PathVariable Long id){
        messegeRepository.deleteById(id);
        return "yes";
    }

    @PutMapping("/update/{id}")
    public String updateMessage(@PathVariable Long id, @RequestBody Messege message) {
        Optional<Messege> existingMessageOptional = messegeRepository.findById(id);
        if (existingMessageOptional.isPresent()){
            Messege existingMessage = existingMessageOptional.get();
            existingMessage.setMessege(message.getMessege());
            messegeRepository.save(existingMessage);
        }
        
        return "yes";
    }
    
}    

