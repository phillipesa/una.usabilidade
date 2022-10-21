public class Aluno
{
    #region atributos

    private string Nome {get; set}
    private string Email {get; set}
    private string Telefone {get; set}
    protected Endereco Endereco {get; set}

    #endregion

    #region funções/métodos

    public Aluno (string nome, string email, string telefone, Endereco endereco) {
        this.Nome = nome;
        this.Email = email;
        this.Telefone = telefone;
        this.Endereco = endereco;   
    }
    
    public string getNome(){
        return this.Nome;
    }

    public Endereco getEndereco(){
        var endereco = new Endereco();
        return endereco.getEnderecoPorEmail(this.Email);
    }

    #endregion

}