/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaSearch, FaEllipsisH, FaEye, FaTrash, FaPen } from 'react-icons/fa';
import { Input } from '@rocketseat/unform';
import Header from '~/components/Header';
import Status from '~/components/Status';
import { Container, Table, Control, MenuPopOver } from './styles';

export default function orders() {
  const [configMenuPopover, setConfigMenuPopover] = useState({
    visible: false,
    positionX: 0,
    positionY: 0,
    index: -1,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleClickOutside() {
      setConfigMenuPopover({ ...configMenuPopover, visible: false });
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [configMenuPopover]);

  const deliveryman = [
    {
      id: 1,
      receiver: 'Maria Eduarda',
      deliveryMan: 'Rodrigo Olegário',
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      status: 'DELIVERED',
    },
    {
      id: 2,
      receiver: 'Sabrina de Silva',
      deliveryMan: 'Rodrigo Olegário',
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      status: 'PENDING',
    },
    {
      id: 3,
      receiver: 'Rogerio da Silva',
      deliveryMan: 'Rodrigo Olegário',
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      status: 'WITHDRAWN',
    },
    {
      id: 4,
      receiver: 'Rogerio da Silva',
      deliveryMan: 'Rodrigo Olegário',
      city: 'Rio de Janeiro',
      state: 'Rio de Janeiro',
      status: 'CANCELED',
    },
  ];

  function handleClickActions(e, index) {
    const currentTargetRect = e.currentTarget.getBoundingClientRect();
    const visible = index !== configMenuPopover.index;

    if (!visible) {
      index = -1;
    }

    setConfigMenuPopover({
      visible,
      positionX: currentTargetRect.left,
      positionY: currentTargetRect.top,
      index,
    });
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Gerenciando encomendas</h1>

        <Control>
          <div>
            <FaSearch />
            <Input
              type="text"
              name="search"
              placeholder="Buscar por encomendas"
            />
          </div>

          <button type="submit">+ CADASTRAR</button>
        </Control>

        <Table>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>

          {deliveryman.map((item, index) => (
            <tr>
              <td>#{item.id}</td>
              <td>{item.receiver}</td>
              <td>{item.deliveryMan}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>
                <Status status={item.status} />
              </td>
              <td onClick={e => handleClickActions(e, index)}>
                <FaEllipsisH />
              </td>
            </tr>
          ))}
        </Table>
        <MenuPopOver
          positionX={configMenuPopover.positionX}
          positionY={configMenuPopover.positionY}
          visible={configMenuPopover.visible}
        >
          <ul>
            <li>
              <FaEye color="#8e5be8" />
              <span>Visualizar</span>
            </li>
            <li>
              <FaPen color="#4d85ee" />
              <span>Editar</span>
            </li>
            <li>
              <FaTrash color="#de3b3b" />
              <span>Excluir</span>
            </li>
          </ul>
        </MenuPopOver>
      </Container>
    </>
  );
}
