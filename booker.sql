-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 22 2019 г., 01:51
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `booker`
--

-- --------------------------------------------------------

--
-- Структура таблицы `b_boardrooms`
--

CREATE TABLE `b_boardrooms` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `b_boardrooms`
--

INSERT INTO `b_boardrooms` (`id`, `name`) VALUES
(1, 'Boardroom 1'),
(2, 'Boardroom 2'),
(3, 'Boardroom 3');

-- --------------------------------------------------------

--
-- Структура таблицы `b_bookings`
--

CREATE TABLE `b_bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `boardroom_id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `datetime_start` timestamp NULL DEFAULT NULL,
  `datetime_end` timestamp NULL DEFAULT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `datetime_created` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `b_bookings`
--

INSERT INTO `b_bookings` (`id`, `user_id`, `boardroom_id`, `description`, `datetime_start`, `datetime_end`, `booking_id`, `datetime_created`) VALUES
(12, 3, 1, 'user2 singe', '2019-07-22 08:15:00', '2019-07-22 09:15:00', NULL, '2019-07-20 17:05:54'),
(18, 2, 1, 'user rec bi-weekly - max', '2019-07-23 10:00:00', '2019-07-23 12:00:00', NULL, '2019-07-20 17:05:54'),
(19, 2, 1, 'user rec bi-weekly - max', '2019-08-06 10:00:00', '2019-08-06 12:00:00', 18, '2019-07-20 17:05:54'),
(20, 2, 1, 'user rec bi-weekly - max', '2019-08-20 10:00:00', '2019-08-20 12:00:00', 18, '2019-07-20 17:05:54'),
(24, 2, 1, 'user rec monthly with holiday', '2019-07-24 06:00:00', '2019-07-24 09:15:00', NULL, '2019-07-20 17:14:17'),
(25, 2, 1, 'user rec monthly with holiday', '2019-08-26 06:00:00', '2019-08-26 09:15:00', 24, '2019-07-20 17:14:17'),
(26, 1, 1, 'admin rec monthly without holiday', '2019-07-26 09:15:00', '2019-07-26 10:15:00', NULL, '2019-07-20 17:14:17'),
(27, 1, 1, 'admin rec monthly without holiday', '2019-08-26 09:15:00', '2019-08-26 10:15:00', 26, '2019-07-20 17:14:17'),
(37, 1, 1, 'single for update checktest', '2019-08-12 08:00:00', '2019-08-12 11:00:00', NULL, '2019-07-20 17:50:29');

-- --------------------------------------------------------

--
-- Структура таблицы `b_roles`
--

CREATE TABLE `b_roles` (
  `id` int(11) NOT NULL,
  `role` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `b_roles`
--

INSERT INTO `b_roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `b_users`
--

CREATE TABLE `b_users` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `role_id` int(11) NOT NULL,
  `login` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `b_users`
--

INSERT INTO `b_users` (`id`, `name`, `email`, `role_id`, `login`, `password`, `token`) VALUES
(1, 'admin', 'admin@mail.com', 1, 'admin', '696d29e0940a4957748fe3fc9efd22a3', 'd942af92510591f965b4b320bca6ac0f'),
(2, 'user', 'user@mail.com', 2, 'user', '696d29e0940a4957748fe3fc9efd22a3', NULL),
(3, 'user2', 'user2@mail.com', 2, 'user2', '696d29e0940a4957748fe3fc9efd22a3', '5a7329096633199323ddf4619c8c319a'),
(4, 'admin2', 'admin2@mail.com', 1, 'admin2', '696d29e0940a4957748fe3fc9efd22a3', '95cb1c5ef147ea28331b5109f7a4de6b');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `b_boardrooms`
--
ALTER TABLE `b_boardrooms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `b_bookings`
--
ALTER TABLE `b_bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `boardroom_id` (`boardroom_id`),
  ADD KEY `main_booking_id` (`booking_id`);

--
-- Индексы таблицы `b_roles`
--
ALTER TABLE `b_roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `b_users`
--
ALTER TABLE `b_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `b_boardrooms`
--
ALTER TABLE `b_boardrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `b_bookings`
--
ALTER TABLE `b_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT для таблицы `b_roles`
--
ALTER TABLE `b_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `b_users`
--
ALTER TABLE `b_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `b_bookings`
--
ALTER TABLE `b_bookings`
  ADD CONSTRAINT `b_bookings_ibfk_1` FOREIGN KEY (`boardroom_id`) REFERENCES `b_boardrooms` (`id`),
  ADD CONSTRAINT `b_bookings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `b_users` (`id`);

--
-- Ограничения внешнего ключа таблицы `b_users`
--
ALTER TABLE `b_users`
  ADD CONSTRAINT `b_users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `b_roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
