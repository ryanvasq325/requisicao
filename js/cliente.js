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
    };
    const response = await fetch(url,options);
    const json = await response.json();
    document.getElementById('logradouro').value = json.logradouro;
    document.getElementById('bairro').value = json.bairro;
    document.getElementById('cidade').value = json.localidade;
     document.getElementById('uf').value = json.estado;
}
const a = async () => {
    const cnpjValue = Cnpj.value;
    const cnpjFormatedValue = cnpjValue
        .replace('.','')
        .replace('-','')
        .replace('/','')
        .trim();
const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpjFormatedValue}`;
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};
const response = await fetch(url,options);
const json = await response.json();

Cep.value = json.cep;
await BuscarCep();
}

Cep.addEventListener('change', async () => {
    BuscarCep()
});
Cnpj.addEventListener('change', a);