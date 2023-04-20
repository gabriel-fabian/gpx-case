import Styles from './item-selector-styles.scss'

import React, { useState } from 'react'

interface ListItem {
  id: string
  value: string
}

const ItemSelector: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([
    {
      id: 'GeoPixel',
      value: 'GeoPixel'
    }
  ])
  const [inputValue, setInputValue] = useState<string>('')
  const [status, setStatus] = useState<string>('Selecione uma opção')

  // Altera o valor de state do input a cada alteração que houver na tag input
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value)
  }

  // Adiciona um novo item a lista do state
  const handleAddItem = (): void => {
    if (inputValue.trim() === '') {
      setStatus('Falha ao adicionar, preencha o valor do item!')
      return
    }

    // Retorna caso o valor já exista na lista
    if (items.find((item) => item.value === inputValue)) {
      return
    }

    const newItem = { id: inputValue, value: inputValue }

    // Adiciona novo item a lista, limpa o input e altera o status
    setItems([...items, newItem])
    handleClearInput()
    setStatus(`O item ${inputValue} foi adicionado!`)
  }

  // Remove o valor do input da lista
  const handleRemoveItem = (): void => {
    if (inputValue.trim() === '') {
      setStatus('Falha ao remover, preencha o valor do item!')
      return
    }

    const itemToRemove = items.find((item) => item.value === inputValue)
    if (!itemToRemove) {
      setStatus(`Falha ao remover, não há um item ${inputValue} na lista!`)
      return
    }
    const updatedItems = items.filter((item) => item.id !== itemToRemove.id)
    setItems(updatedItems)

    /*
      Caso o valor a ser removido seja o mesmo valor do select o valor será alterado
      para vazio, retornando a opção de 'Selecione uma opção'
    */
    const selectElement = document.getElementById('options')
    if (
      selectElement instanceof HTMLSelectElement &&
      itemToRemove.value === selectElement.value
    ) {
      selectElement.value = ''
    }

    handleClearInput()
    setStatus(`O valor ${inputValue} foi removido!`)
  }

  const handleClearInput = (): void => {
    setInputValue('')
    setStatus('A caixa de input foi limpa!')
  }

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setStatus(`O valor ${event.target.value} foi selecionado!`)
  }

  return (
    <div className={Styles.contentWrap}>
      <div className={Styles.selectItem}>
        <select name='options' id='options' onChange={handleSelectChange}>
          {/* Adicionado uma option para servir como placeholder */}
          <option value='' disabled selected>
            Selecione uma opção
          </option>
          {/* Pada cada item contido no state será criado uma nova option */}
          {items.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
      <div className={Styles.inputItem}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Insira um item'
        />
      </div>
      <div className={Styles.buttons}>
        <button onClick={handleAddItem}>Adicionar</button>
        <button onClick={handleRemoveItem}>Remover</button>
        <button onClick={handleClearInput}>Limpar Caixa</button>
      </div>
      <div className={Styles.status}>
        <span>{status}</span>
      </div>
    </div>
  )
}

export default ItemSelector
