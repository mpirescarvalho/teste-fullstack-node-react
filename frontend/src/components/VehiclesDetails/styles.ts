import styled from 'styled-components';
import { Card as CardUI } from '@material-ui/core';

export const Container = styled.div`
	flex: 1;
	margin-left: 10px;

	align-self: flex-start;
	position: sticky;
	top: 30px;

	h3 {
		color: ${({ theme }) => theme.colors.gray['800']};
		font-size: 15px;
		margin-bottom: 14.5px;
	}
`;

export const Card = styled(CardUI)`
	&& {
		> div {
			padding: 14px 10px 10px 10px;

			h1 {
				font-size: 19px;
				color: ${({ theme }) => theme.colors.green['700']};
			}

			span {
				font-size: 15px;
				color: ${({ theme }) => theme.colors.gray['400']};

				&.title {
					color: ${({ theme }) => theme.colors.gray['800']};
				}
			}

			p {
				margin-top: 30px;
				font-size: 15px;
				color: ${({ theme }) => theme.colors.gray['700']};
			}
		}

		> footer {
			padding: 12px 25px 12px 12px;
			margin-top: 10px;
			border-top: 1px solid ${({ theme }) => theme.colors.gray['300']};

			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
`;

export const FlexGrid = styled.div`
	margin-top: 27px;
	> div {
		display: flex;
		> * {
			flex: 1;
		}
	}
`;

export const EditButton = styled.button`
	padding: 13px 35px 13px 20px;
	border: 0;
	background: ${({ theme }) => theme.colors.gray['600']};
	color: ${({ theme }) => theme.colors.gray['100']};
	font-size: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background: ${({ theme }) => theme.colors.gray['800']};
	}

	> span {
		margin-left: 20px;
	}
`;
