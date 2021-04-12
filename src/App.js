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

  //função que converte a moeda
  async function converteMoeda(tipo, conversor) {
    if (tipo !== conversor) {
      let url = `https://economia.awesomeapi.com.br/all/${tipo}-${conversor}`

      await fetch(url)
        .then(res => res.json())
        .then(data => {
          switch (tipo) {
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
              setMoedas(data.XRP);break
            default: ; break
          }
        })
        .catch(function (error) {
          console.error(`Erro ao converter ${error.message}`)
        })
    } else {
      alert("A moeda selecionada deve ser direferente da moeda conversora!")
    }
  }

  return (
    <>
      <Navbar className='bg-dark justify-content-between' variant='dark'>
        <Navbar.Brand href="#home">Cotação de Moedas</Navbar.Brand>
        <Form inline>
          <DropdownButton id="codigo-das-moedas"
            title={`${tipoMoeda} ${descrição}`}>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("USD")
                  setDescrição("(Dólar Americano)")
                }}>
                USD (Dólar Americano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("CAD")
                  setDescrição("(Dólar Canadense)")
                }}>CAD (Dólar Canadense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("AUD")
                  setDescrição("(Dólar Australiano)")
                }}>AUD (Dólar Australiano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("EUR")
                  setDescrição("(Euro)")
                }}>EUR (Euro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("GBP")
                  setDescrição("(Libra Esterlina)")
                }}>GBP (Libra Esterlina)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("ARS")
                  setDescrição("(Peso Argentino)")
                }}>ARS (Peso Argentino)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("JPY")
                  setDescrição("(Iene Japonês)")
                }}>JPY (Iene Japonês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("CHF")
                  setDescrição("(Franco Suíço)")
                }}>CHF (Franco Suíço)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("CNY")
                  setDescrição("(Yuan Chinês)")
                }}>CNY (Yuan Chinês)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("YLS")
                  setDescrição("(Novo Shekel Israelense)")
                }}>YLS (Novo Shekel Israelense)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("BTC")
                  setDescrição("(Bitcoin)")
                }}>BTC (Bitcoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("LTC")
                  setDescrição("(Litecoin)")
                }}>LTC (Litecoin)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("ETH")
                  setDescrição("(Ethereum)")
                }}>ETH (Ethereum)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setTipoMoeda("XRP")
                  setDescrição("(Ripple)")
                }}>XRP (Ripple)</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownButton>
          <DropdownButton
            title={`${moedaConversora} ${subtitulo}`}
            className='itens'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setMoedaConversora('BRL')
                  setSubTitulo('(Real Brasileiro)')
                }}>BRL (Real Brasileiro)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setMoedaConversora('USD')
                  setSubTitulo('(Dolar Americano)')
                }}>USD (Dolar Americano)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setMoedaConversora('EUR')
                  setSubTitulo('(Euro)')
                }}>EUR (Euro)</Dropdown.Item>
            </Dropdown.Menu>
          </DropdownButton>

          <Button
            disabled={tipoMoeda && moedaConversora ? false : true}
            onClick={() => {
              converteMoeda(tipoMoeda, moedaConversora)
            }}>Converter</Button>
        </Form>
      </Navbar>
      {moedas &&
        <div className='itens'>
          <Row className='justify-content-center'>
            <Card bg='dark' text='white' className='text-center'>
              <Card.Header>
                Convertendo: {moedas.code} <br />
              Para: {moedas.codein}
              </Card.Header>
              <Card.Body>
                <Dinheiro/>
              </Card.Body>
              <Card.Footer>
                {`1 - ${moedas.code} valor de venda: ${moedas.ask} ${moedas.codein}`}
                <br/>
                {`1 - ${moedas.code} valor de compra: ${moedas.bid} ${moedas.codein}`}
              </Card.Footer>
            </Card>
          </Row>
        </div>
      }
    </>
  )
}
export default App;