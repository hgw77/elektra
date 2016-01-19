module Identity
  class RoleAssignment < DomainModelServiceLayer::Model
    attr_accessor :role_name, :user_name, :group_name, :domain_name
    
    def user_id
      (read("user") || {})["id"]
    end
    
    def scope_project_id
      ((read("scope") || {})["project"] || {})["id"]
    end
    
    def scope_domain_id
      ((read("scope") || {})["domain"] || {})["id"]
    end
    
    def role_id
      (read("role") || {})["id"]
    end
    
  end
end