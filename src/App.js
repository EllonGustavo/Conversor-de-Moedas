import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { ReactComponent as Dinheiro } from '../src/img/money.svg'
import { format } from 'date-fns'
import './App.css'

function App() {
  //variavel onde serão armazenadas as moedas
  const [moedas, setMoedas] = useState(null)
  //código da moeda a ser convertida
  const [tipoMoeda, setTipoMoeda] = useState('')
  //descrição da moeda para o usuario
  const [descrição, setDescrição] = useState('Selecione uma moeda')
  //código da moeda de conversão
  const [moedaConversora, setMoedaConversora] = useState('')
  //descrição da moeda de conversão
  const [subtitulo, setSubTitulo] = useState('Converter para ...')
  //valor dado pelo usuario da quantidade de moeadas para a conversão
  const [qntMoedas, setQntMoedas] = useState()
  //Visibilidade dos cards
  const [visibilidade, setVisibilidade] = useState(false)
  //Data de atualização dos dados da api
  const [data, setData] = useState()
  //Variavel que vai armazenar a data formatada
  const [dataForm, setDataForm] = useState()

  //função que converte a moeda
  async function converteMoeda(tipo, conversor) {
    if (tipo !== conversor) {
      let url = `https://economia.awesomeapi.com.br/all/${tipo}-${conversor}`

      await fetch(url)
        .then(res => res.json())
        .then(data => {
          switch (tipo) {
            case 'BRL':
              setMoedas(data.BRL); break
            case 'USD':
              setMoedas(data.USD); break
            case 'CAD':
              setMoedas(data.CAD); break
            case 'AUD':
              setMoedas(data.AUD); break
            case 'EUR':
              setMoedas(data.EUR); break
            case 'GBP':
              setMoedas(data.GBP); break
            case 'ARS':
              setMoedas(data.ARS); break
            case 'JPY':
              setMoedas(data.JPY); break
            case 'CHF':
              setMoedas(data.CHF); break
            case 'CNY':
              setMoedas(data.CNY); break
            case 'YLS':
              setMoedas(data.YLS); break
            case 'BTC':
              setMoedas(data.BTC); break
            case 'LTC':
              setMoedas(data.LTC); break
            case 'ETH':
              setMoedas(data.ETH); break
            case 'XRP':
              setMoedas(data.XRP); break
            default: ; break
          }
        },
          FormataData(),
          setVisibilidade(true)
        )
        .catch(function (error) {
          console.error(`Erro ao converter ${error.message}`)
        })
    } else {
      alert("A moeda selecionada deve ser direferente da moeda conversora!")
    }
  }

  //função que define o tipo e descrição da moeda
  function SetTipoDescricao(moeda, texto) {
    setTipoMoeda(moeda)
    setDescrição(texto)
    setVisibilidade(false)
  }

  //função que define a moeda de conversão e a descrição dela
  function SetConversoraTexto(moeda, texto) {
    setMoedaConversora(moeda)
    setSubTitulo(texto)
    setVisibilidade(false)
  }
  //função para formatar a data
  function FormataData() {
    if (moedas) {
      setData(new Date(moedas.create_date))
      setDataForm(format(data, 'dd/MM/yyyy'))
    }
  }
  return (
    <>
      <Navbar className='bg-dark justify-content-between' variant='dark'>
        <Navbar.Brand href="#home">Cotação de Moedas</Navbar.Brand>
        <Form inline>
          <DropdownButton
            id="codigo-das-moedas"
            title={`${tipoMoeda} ${descrição}`}>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao('BRL', '(Real Brasileiro)')
                }}>BRL (Real Brasileiro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("USD", "(Dólar Americano)")
                }}>
                USD (Dólar Americano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("CAD", "(Dólar Canadense)")
                }}>CAD (Dólar Canadense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("AUD", "(Dólar Australiano)")
                }}>AUD (Dólar Australiano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("EUR", "(Euro)")
                }}>EUR (Euro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("GBP", "(Libra Esterlina)")
                }}>GBP (Libra Esterlina)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("ARS", "(Peso Argentino)")
                }}>ARS (Peso Argentino)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("JPY", "(Iene Japonês)")
                }}>JPY (Iene Japonês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("CHF", "(Franco Suíço)")
                }}>CHF (Franco Suíço)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("CNY", "(Yuan Chinês)")
                }}>CNY (Yuan Chinês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("YLS", "(Novo Shekel Israelense)")
                }}>YLS (Novo Shekel Israelense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("BTC", "(Bitcoin)")
                }}>BTC (Bitcoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("LTC", "(Litecoin)")
                }}>LTC (Litecoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("ETH", "(Ethereum)")
                }}>ETH (Ethereum)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetTipoDescricao("XRP", "(Ripple)")
                }}>XRP (Ripple)</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownButton>

          <Form.Control
            className='itens'
            disabled={tipoMoeda === '' ? true : false}
            type='number'
            placeholder='Digite um valor maior que 1'
            value={qntMoedas}
            onChange={evento => setQntMoedas(evento.target.value)} />

          <Form.Label
            className='itens'
            color='white'>
            Converter para:
          </Form.Label>

          <DropdownButton
            title={`${moedaConversora} ${subtitulo}`}
            className='itens'
            disabled={qntMoedas > 0 ? false : true}
            variant={qntMoedas > 0 ? 'primary' : 'secondary'}>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto('BRL', '(Real Brasileiro)')
                }}>BRL (Real Brasileiro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("USD", "(Dólar Americano)")
                }}>
                USD (Dólar Americano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("CAD", "(Dólar Canadense)")
                }}>CAD (Dólar Canadense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("AUD", "(Dólar Australiano)")
                }}>AUD (Dólar Australiano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("EUR", "(Euro)")
                }}>EUR (Euro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("GBP", "(Libra Esterlina)")
                }}>GBP (Libra Esterlina)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("ARS", "(Peso Argentino)")
                }}>ARS (Peso Argentino)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("JPY", "(Iene Japonês)")
                }}>JPY (Iene Japonês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("CHF", "(Franco Suíço)")
                }}>CHF (Franco Suíço)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("CNY", "(Yuan Chinês)")
                }}>CNY (Yuan Chinês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("YLS", "(Novo Shekel Israelense)")
                }}>YLS (Novo Shekel Israelense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("BTC", "(Bitcoin)")
                }}>BTC (Bitcoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("LTC", "(Litecoin)")
                }}>LTC (Litecoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("ETH", "(Ethereum)")
                }}>ETH (Ethereum)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetConversoraTexto("XRP", "(Ripple)")
                }}>XRP (Ripple)</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownButton>

          <Button
            disabled={moedaConversora && qntMoedas > 0 ? false : true}
            variant={moedaConversora && qntMoedas > 0 ? 'primary' : 'secondary'}
            onClick={() => {
              converteMoeda(tipoMoeda, moedaConversora)
            }}>Converter</Button>
        </Form>
      </Navbar>
      {(visibilidade && moedas) &&
        <div className='itens'>
          <Row className='justify-content-center'>
            <Card bg='dark' text='white' className='text-center' style={{ fontFamily: 'cursive' }}>
              <Card.Header>
                Convertendo: {moedas.code} <br />
                Para: {moedas.codein} <br />
                Ultima atualização: {dataForm}
              </Card.Header>
              <Card.Body>
                <Dinheiro />
              </Card.Body>
              <Card.Footer>
                {`${parseInt(qntMoedas.trim())} - ${moedas.code} valor de venda: ${moedas.ask * parseInt(qntMoedas.trim())} ${moedas.codein}`}
                <br />
                {`${parseInt(qntMoedas.trim())} - ${moedas.code} valor de compra: ${moedas.bid * parseInt(qntMoedas.trim())} ${moedas.codein}`}
              </Card.Footer>
            </Card>
          </Row>
        </div>
      }
    </>
  )
}
export default App;