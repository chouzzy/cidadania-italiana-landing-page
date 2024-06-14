// pages/api/bitrix24form1.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, whatsapp, parent, nome_do_italiano, documento } = req.body;

      const bitrix24Data = {
        fields: {
          TITLE: `Novo Lead do Site - MATHEUS DESENVOLVEDOR TESTE`,
          NAME: 'MATHEUS DESENVOLVEDOR TESTE',
          PHONE: [{ VALUE: '11971415567', VALUE_TYPE: 'WORK' }],
          PARENTE: 'parente',
          NOMEITALIANO: 'nome_do_italiano',
          TEMPARENTESCO: 'Sim' === 'Sim' ? 'Sim' : 'Não',
          // Mapeie os outros campos do formulário para os campos do Bitrix24
        },
      };

      const response = await axios.post(
        'https://clubedopassaporte.bitrix24.com.br/rest/5/7xq83kyjlwwxmcg6/crm.lead.add',
        bitrix24Data
      );

      res.status(200).json({ message: 'Lead criado com sucesso', data: response.data });
    } catch (error) {
      console.error('Erro ao criar lead:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}