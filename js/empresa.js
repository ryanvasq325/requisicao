const Cep = document.getElementById('cep');
const Cnpj = document.getElementById('cnpj')

async function BuscarCep(){
    const cepValue = Cep.value;
    const cepFormatedValue = cepValue.replace('-','').trim();
    if (cepFormatedValue.length !== 8) {
        alert('Por favor,informe um CEP válido');
        return;
    }
    const url = `https://viacep.com.br/ws/${cepFormatedValue}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
    const response = await fetch(url,options);
    const json = await response.json();
    console.log(json.logradouro);
    console.log(json.bairro);
    console.log(json.localidade);
    console.log(json.uf);
    document.getElementById('logradouro').value = json.logradouro
    document.getElementById('bairro').value = json.bairro
    document.getElementById('uf').value = json.uf
    document.getElementById('cidade').value = json.uf
}
const a = async () => {
    const cnpjValue = Cnpj.value;
    const cnpjFormatedValue = cnpjValue
        .replace('.','')
        .replace('-','')
        .replace('/','')
        .trim();
const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpjFormatedValue}`;

return;
}

Cep.addEventListener('change', async () => {
    BuscarCep()
});
Cnpj.addEventListener('change', a);