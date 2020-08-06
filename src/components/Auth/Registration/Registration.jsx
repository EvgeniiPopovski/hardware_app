import React from "react";
import { Input, Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import styles from "./../Auth.module.scss";
import { Redirect } from "react-router";




const Registration = ({ setAuthLogin, setAuthPass, email, password, doRegistration, userId }) => {
	const changeLogin = (event) => {
		setAuthLogin(event.target.value);
	};
	const changePass = (event) => {
		setAuthPass(event.target.value);
	};
	if (userId) {
		return <Redirect to='/personal'/>
	}
	return (
		<div className={styles.authContainer}>
			<div className={styles.inputLogin}>
				<label>
					Логин
					<Input placeholder="Логин" onChange={(event) => changeLogin(event)} />
				</label>
			</div>
			<div className={styles.inputLogin} >
				<label>
					Пароль
					<Input
						type={"password"}
						placeholder="Пароль"
						onChange={(event) => changePass(event)}
					/>
				</label>
			</div>
			<Button icon={<ExportOutlined />} onClick={() => doRegistration(email , password)}>
				Регистрация
			</Button>
		</div>
	);
};

export { Registration };
