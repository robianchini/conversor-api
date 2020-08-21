
# Documentação

![](https://img.shields.io/badge/version-1.0.0-brightgreen) ![](https://img.shields.io/badge/version-1.0.0-brightgreen) 

- [Overview](#Documentação "Overview")
- [Endpoint](#Endpoint "Endpoint")
- [Unidades de Medida](#Units "Unidades de Medida")
- [Parâmetros obrigatórios](#Parameters "Parâmetros obrigatórios")

Esta é uma API desenvolvida em NodeJS para conversão de valores entre diferentes unidades de medida, incluindo área, moeda, dados, transferência de dados, consumo de combustível, comprimento, velocidade, temperatura, volume e peso.



## Endpoint
Faça as requisições para o endpoint a seguir utilizando o método ![GET](https://img.shields.io/badge/GET-brightgreen)

### Request

`GET` `https://conversor-api.herokuapp.com/unit/parameters`

![required](https://img.shields.io/badge/Importante:-red)

No local de `/unit/` utilize uma das [unidades](##Units) disponíveis e no local de `parameters` utilize os  [parâmetros](##Parameters) obrigatórios.

### Response
A resposta da requisição será retornada em JSON com os seguintes campos:

**unitFrom:** unidade de origem informada na requisição

**unitTo:** unidade de destino informada na requisição

**originalValue:** valor a ser convertido informado na requisição

**convertedValue:** valor já convertido

**quotation:** cotação atual da moeda selecionada (exclusivo para

**quotationDate:** data da cotação (exclusivo para conversão de moeda)


### Exemplo
Request

[`https://conversor-api.herokuapp.com/currency/?from=USD&to=BRL&value`](https://conversor-api.herokuapp.com/currency/?from=USD&to=BRL&value)

Response

![](https://img.shields.io/badge/STATUS-200%3A%20OK-brightgreen)


```json
{
  "currencyFrom": "USD",
  "currencyTo": "BRL", 
  "originalValue": 1, 
  "convertedValue": 5.6154,
   "quotation": 5.6154, 
  "quotationDate": "2020-08-21 14:57:12"
}
```


![](https://img.shields.io/badge/STATUS-404%3A%20Not%20Found-red)

 ```json
{
  "error": "Por favor informe o valor para conversão!"
}
```


## Units
Para configurar o parâmetro `/unit/` do endpoint, utilize uma das unidades de medida a seguir.

### Área
Para converter unidades de área, utilize `/area/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `sqft` Pés quadrados

- `m2` Metros quadrados

- `km2` Quilômetros quadrados

- `mi2` Milhas quadradas

- `yd2` Jardas quadradas

- `in2` Polegadas quadradas

- `ha` Hectares


### Moeda
Para converter moedas, utilize `/currency/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `USD` Dólar Americano

- `BRL` Real Brasileiro

### Dados
Para converter unidades de dados, utilize `/data/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `bit` Bit

- `kbit` Kilobit

- `mbit` Megabit

- `gbit` Gigabit

- `tbit` Terabit

- `byte` Byte

- `kbyte` Kilobyte

- `mbyte` Megabyte

- `gbyte` Gigabyte

- `tbyte` Terabyte

### Transferência de dados
Para converter unidades de transferência de dados, utilize `/datatransfer/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `bps` Bits por segundo

- `kbps` Kilobits por segundo

- `mbps` Megabits por segundo

- `gbps` Gigabits por segundo

- `tbps` Terabits por segundo

- `kBps` Kilobytes por segundo

- `mBps` Megabytes por segundo

- `gBps` Gigabytes por segundo

- `tBps` Terabytes por segundo

### Combustível
Para converter unidades de medida de combustível, utilize `/fuel/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `mpg` Milhas por galão

- `kml` Quilômetros por litro

### Comprimento
Para converter unidades de comprimento, utilize `/lenght/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `mm` Milímetros

- `cm` Centímetros

- `m` Metros

- `km` Quilômetros

- `yd` Jardas

- `ft` Pés

- `in` Polegadas

- `mi` Milhas

- `nm` Milhas náuticas

### Velocidade
Para converter unidades de área, utilize `/speed/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `mph` Milhas por hora

- `fps` Pés por segundo

- `mps` Metros por segundo

- `kmh` Quilômetros por hora

- `kt` Nós (Knots)

### Temperatura
Para converter unidades de temperatura, utilize `/temperature/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `k` Kelvin

- `c` Graus Celcius

- `f` Graus Fahrenheit

### Volume
Para converter unidades de volume, utilize `/volume/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `floz` Onças fluídas

- `gal` Galões americanos

- `ml` Mililitros

- `l` Litros

### Peso
Para converter unidades de peso, utilize `/weight/` no endpoint. Como parâmetros `&from=` e `&to=` utilize as seguintes unidades:

- `mg` Miligramas

- `g` Gramas

- `kg` Quilogramas

- `ton` Toneladas

- `lb` Libras

- `oz` Onças

## Parameters
Para configurar a sua requisição, você deve informar os seguintes parâmetros obrigatórios:

`&from=` Unidade de origem para conversão 

`&to=` Unidade de destino para conversão 

`&value=` Valor (float) que será convertido
