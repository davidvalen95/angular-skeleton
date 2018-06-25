import {ApiBaseResponseInterface, ApiPaginationResponseInterface} from '../../service/api/api.service';
import {BranchInterface, BranchSummaryInterface} from '../module/branch/BranchApiInterface';
import {UserHistoryInterface} from '../profile/ProfileApiInterface';
import {ThreadInterface} from '../thread/ThreadApiInterface';


export interface AppTopInterface extends ApiBaseResponseInterface{



    data:{
        activePupil: number;
        offPupil: number;
        branchSummary: BranchSummaryInterface;
        histories: ApiPaginationResponseInterface<UserHistoryInterface>;
        filter:{
            cmbEventType
        }
        thread: ApiPaginationResponseInterface<ThreadInterface>
        isCanHistory:boolean;
    }

}