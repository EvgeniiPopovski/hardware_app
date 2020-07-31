import React from "react";
import { Input, Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import styles from "./../Auth.module.scss";
import { authAPI } from "../../../API/authAPI";


const Login = () => {
	
	return (
		<div className={styles.authContainer}>
			<div className={styles.inputLogin}>
				<label>
					Логин
					<Input placeholder="Логин" onChange={(event) => signInLogin(event)} />
				</label>
			</div>
			<div className={styles.inputLogin} >
				<label>
					Пароль
					<Input
						type={"password"}
						placeholder="Пароль"
						onChange={(event) => signInPass(event)}
					/>
				</label>
			</div>
			<Button icon={<ExportOutlined />} onClick={() => doLogin()}>
				Войти
			</Button>
		</div>
	);
};

export { Login };
