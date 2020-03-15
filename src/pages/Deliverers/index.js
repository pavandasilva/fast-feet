/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaEllipsisH,
  FaWindowClose,
  FaTrash,
  FaPen,
} from 'react-icons/fa';
import { Input } from '@rocketseat/unform';
import Header from '~/components/Header';
import LazyPhoto from '~/components/LazyPhoto';
import Signature from '~/assets/assinatura.jpg';
import {
  Container,
  Table,
  Control,
  MenuPopOver,
  Modal,
  ModalContent,
  Close,
} from './styles';

export default function orders() {
  const [configMenuPopover, setConfigMenuPopover] = useState({
    visible: false,
    positionX: 0,
    positionY: 0,
    index: -1,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const name = [
    {
      id: 1,
      photo: 'Maria Eduarda',
      name: 'Rodrigo Olegário',
      email: 'rogerio_pavan@hotmail.com',
      nameAbreviation: 'RO',
    },
    {
      id: 2,
      photo:
        'https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg?w=800&quality=85',
      name: 'Rodrigo Olegário',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RO',
    },
    {
      id: 3,
      photo: 'Rogerio da Silva',
      name: 'Rodrigo Olegário',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RO',
    },
    {
      id: 4,
      photo: 'Rogerio da Silva',
      name: 'Rodrigo Olegário',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RS',
    },
    {
      id: 1,
      photo: 'Maria Eduarda',
      name: 'Rodrigo Olegário',
      email: 'rogerio_pavan@hotmail.com',
      nameAbreviation: 'RO',
    },
    {
      id: 2,
      photo:
        'https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg?w=800&quality=85',
      name: 'Rodrigo Olegário40',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RO',
    },
    {
      id: 3,
      photo: 'Rogerio da Silva',
      name: 'Rodrigo Olegário',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RO',
    },
    {
      id: 4,
      photo: 'Rogerio da Silva',
      name: 'Rodrigo Olegário',
      email: 'Rio de Janeiro',
      nameAbreviation: 'RS',
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

  function handleEditDeliverers() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <Header />
      <Container showScrollbar={modalIsOpen}>
        <h1>Gerenciando entregadores</h1>

        <Control>
          <div>
            <FaSearch />
            <Input
              type="text"
              name="search"
              placeholder="Buscar por entregadores"
            />
          </div>

          <button type="submit">+ CADASTRAR</button>
        </Control>

        <Table>
          <tr>
            <th>ID</th>
            <th>photo</th>
            <th>name</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>

          {name.map((item, index) => (
            <tr>
              <td>#{item.id}</td>
              <td>
                <LazyPhoto
                  abreviation={item.nameAbreviation}
                  photoUrl={item.photo}
                >
                  {item.photo}
                </LazyPhoto>
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
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
            <li onClick={() => handleEditDeliverers()}>
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
      {modalIsOpen && (
        <Modal>
          <ModalContent>
            <div>
              <h1>Informações da encomenda</h1>
              <p>Rua Abelardo Bueno, 1729</p>
              <p>Rio de Janeiro - RJ</p>
              <p>17212604-5</p>
            </div>
            <div>
              <h1>Datas</h1>
              <p>Retirada: 23/08/2020</p>
              <p>Entrega: 25/08/2020</p>
            </div>
            <div>
              <h1>Assinatura do destinatário</h1>
              <img src={Signature} alt="Assinatura do cliente" />
            </div>
            <Close onClick={() => handleEditDeliverers()}>
              <FaWindowClose />
            </Close>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
