import { Mapper } from '../../../core/infra/Mapper';
import Engagement from '../models/engagementModel';
import { SimpleEngagementDTO } from '../dtos/engagementDTO';

export class EngagementMapper extends Mapper<Engagement> {
	public static toSimpleDTO(engagement: Engagement): SimpleEngagementDTO {
		return {
			id: engagement.get('id').toString(),
			timestamp: engagement.get('timestamp'),
			state: engagement.get('UsState').get('code')
		};
	}
}
