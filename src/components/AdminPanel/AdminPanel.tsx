import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { Helmet } from 'react-helmet-async';

interface RequestData {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  date: string;
}

const AdminPanel: React.FC = () => {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(null);

  const ADMIN_PASSWORD = 'wehx4BFyf*fl9AYcA~Kg';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      localStorage.setItem('admin_authorized', 'true');
      fetchRequests();
    } else {
      setError('Неверный пароль');
    }
  };

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/requests');
      if (!response.ok) {
        throw new Error('Не удалось загрузить заявки');
      }
      const data = await response.json();
      setRequests(data);
      setError(null);
    } catch (err) {
      setError('Ошибка при загрузке заявок. Проверьте, запущен ли сервер.');
    } finally {
      setLoading(false);
    }
  };

  const deleteRequest = async (id: string) => {
    if (!window.confirm('Вы уверены, что хотите удалить эту заявку?')) {
      return;
    }

    try {
      const response = await fetch(`/api/requests/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Не удалось удалить заявку');
      }

      // Удаляем заявку из состояния
      setRequests(requests.filter(req => req.id !== id));
      if (selectedRequest?.id === id) {
        setSelectedRequest(null);
      }
    } catch (err) {
      setError('Ошибка при удалении заявки');
    }
  };

  useEffect(() => {
    // Проверяем, авторизован ли админ
    const isAuth = localStorage.getItem('admin_authorized') === 'true';
    setIsAuthorized(isAuth);

    if (isAuth) {
      fetchRequests();
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authorized');
    setIsAuthorized(false);
  };

  if (!isAuthorized) {
    return (
        <div className="admin-login">
          <div className="admin-login-container">
            <h2>Вход в панель администратора</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>
              <button type="submit" className="admin-button">Войти</button>
            </form>
          </div>
        </div>
    );
  }

  return (
      <div className="admin-panel">
        <Helmet>
          <title>Админ-панель | EdBuk</title>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="yandex" content="none" />
        </Helmet>
        <div className="admin-header">
          <h2>Панель администратора</h2>
          <button onClick={handleLogout} className="logout-button">Выйти</button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="admin-content">
          <div className="requests-list">
            <h3>Список заявок ({requests.length})</h3>

            {loading ? (
                <div className="loading">Загрузка заявок...</div>
            ) : requests.length === 0 ? (
                <div className="empty-message">Нет новых заявок</div>
            ) : (
                <ul>
                  {requests.map(request => (
                      <li
                          key={request.id}
                          className={selectedRequest?.id === request.id ? 'selected' : ''}
                          onClick={() => setSelectedRequest(request)}
                      >
                        <div className="request-list-item">
                          <div>
                            <strong>{request.name}</strong>
                            <div className="request-date">{formatDate(request.date)}</div>
                          </div>
                          <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteRequest(request.id);
                              }}
                              className="delete-button"
                          >
                            Удалить
                          </button>
                        </div>
                      </li>
                  ))}
                </ul>
            )}
          </div>

          <div className="request-details">
            {selectedRequest ? (
                <div className="request-card">
                  <h3>Детали заявки</h3>
                  <div className="request-info">
                    <p><strong>Дата:</strong> {formatDate(selectedRequest.date)}</p>
                    <p><strong>Имя:</strong> {selectedRequest.name}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${selectedRequest.email}`}>{selectedRequest.email}</a></p>
                    <p><strong>Телефон:</strong> <a href={`tel:${selectedRequest.phone}`}>{selectedRequest.phone}</a></p>
                    <p><strong>Компания:</strong> {selectedRequest.company}</p>
                    <p><strong>Сообщение:</strong></p>
                    <div className="message-content">{selectedRequest.message}</div>
                  </div>
                  <div className="request-actions">
                    <button onClick={() => deleteRequest(selectedRequest.id)} className="delete-button">
                      Удалить заявку
                    </button>
                  </div>
                </div>
            ) : (
                <div className="no-selection">
                  <p>Выберите заявку из списка для просмотра деталей</p>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default AdminPanel;
